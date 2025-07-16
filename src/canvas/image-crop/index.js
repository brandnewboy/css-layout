import './index.css'
import { html, parseHTML } from '@/helper'


const template = parseHTML(html`
    <div id="app">
        <header>
            <div class="container">
                <div class="header-content">
                    <h1 class="header-title">Canvas图片裁剪工具</h1>
                </div>
            </div>
        </header>

        <main class="container">
            <div class="grid-container">
                <!-- 左侧：图片上传和控制区 -->
                <div>
                    <div class="card">
                        <h2 class="card-title">上传图片</h2>
                        <div>
                            <div class="upload-area" id="upload-area">
                                <input type="file" id="image-upload" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                                <i class="fa fa-cloud-upload upload-icon"></i>
                                <p class="upload-text">点击或拖拽图片到此处</p>
                                <p class="upload-hint">支持 JPG、PNG、GIF 格式</p>
                            </div>

                            <div class="controls" id="controls">
                                <h3 class="controls-title">裁剪控制</h3>
                                <div class="btn-group">
                                    <button id="reset-btn" class="btn btn-neutral">
                                        <i class="fa fa-refresh mr-1"></i> 重置
                                    </button>
                                    <button id="download-btn" class="btn btn-primary" disabled>
                                        <i class="fa fa-download mr-1"></i> 下载
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h2 class="card-title">使用说明</h2>
                        <ul class="instructions">
                            <li>
                                <i class="fa fa-check-circle instructions-icon"></i>
                                <span>上传图片后，在预览区域拖动鼠标选择裁剪区域</span>
                            </li>
                            <li>
                                <i class="fa fa-check-circle instructions-icon"></i>
                                <span>可以调整裁剪框大小和位置</span>
                            </li>
                            <li>
                                <i class="fa fa-check-circle instructions-icon"></i>
                                <span>点击"下载"按钮保存裁剪后的图片</span>
                            </li>
                            <li>
                                <i class="fa fa-check-circle instructions-icon"></i>
                                <span>点击"重置"按钮可以重新选择裁剪区域</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 右侧：预览和裁剪区 -->
                <div>
                    <div class="card">
                        <h2 class="card-title">图片预览</h2>
                        <div class="canvas-container" id="canvas-container">
                            <canvas id="preview-canvas" class="max-w-full"></canvas>
                            <div id="crop-box" class="crop-box"></div>
                        </div>
                    </div>

                    <div class="card result-container" id="result-container">
                        <h2 class="card-title">裁剪结果</h2>
                        <div class="canvas-container">
                            <canvas id="result-canvas" class="max-w-full"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <div class="container">
                <p class="footer-text">© 2025 Canvas图片裁剪工具 | 使用HTML5 Canvas技术实现</p>
            </div>
        </footer>
    </div>
`)

document.body.appendChild(template.body.firstChild)

document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const uploadArea = document.getElementById('upload-area');
    const imageUpload = document.getElementById('image-upload');
    const previewCanvas = document.getElementById('preview-canvas');
    const resultCanvas = document.getElementById('result-canvas');
    const cropBox = document.getElementById('crop-box');
    const resetBtn = document.getElementById('reset-btn');
    const downloadBtn = document.getElementById('download-btn');
    const controls = document.getElementById('controls');
    const resultContainer = document.getElementById('result-container');
    const canvasContainer = document.getElementById('canvas-container');

    // 全局变量
    let originalImage = null;
    let isDragging = false;
    let startX, startY, currentX, currentY;
    let scale = 1;

    // 上传区域样式交互
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('border-primary');
        this.classList.add('bg-primary/5');
    });

    uploadArea.addEventListener('dragleave', function() {
        this.classList.remove('border-primary');
        this.classList.remove('bg-primary/5');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('border-primary');
        this.classList.remove('bg-primary/5');

        if (e.dataTransfer.files.length) {
            handleImageUpload(e.dataTransfer.files[0]);
        }
    });

    // 处理图片上传
    imageUpload.addEventListener('change', function() {
        if (this.files.length) {
            handleImageUpload(this.files[0]);
        }
    });

    // 处理上传的图片
    function handleImageUpload(file) {
        if (!file.type.match('image.*')) {
            alert('请上传图片文件！');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                originalImage = img;
                initCanvas();
                controls.classList.remove('hidden');
                resultContainer.classList.add('hidden');
                downloadBtn.disabled = true;
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // 初始化Canvas
    function initCanvas() {
        const ctx = previewCanvas.getContext('2d');

        // 设置Canvas尺寸与图片相同
        previewCanvas.width = originalImage.width;
        previewCanvas.height = originalImage.height;

        // 绘制图片
        ctx.drawImage(originalImage, 0, 0);

        // 重置裁剪框
        cropBox.style.width = '0px';
        cropBox.style.height = '0px';
        cropBox.classList.add('hidden');

        // 监听Canvas上的鼠标事件
        setupCanvasEvents();
    }

    // 设置Canvas鼠标事件
    function setupCanvasEvents() {
        const canvas = previewCanvas;
        const ctx = canvas.getContext('2d');

        // 鼠标按下
        canvas.addEventListener('mousedown', startCrop);

        // 鼠标移动
        canvas.addEventListener('mousemove', updateCrop);

        // 鼠标释放
        canvas.addEventListener('mouseup', endCrop);
        canvas.addEventListener('mouseleave', endCrop);
    }

    // 开始裁剪
    function startCrop(e) {
        if (!originalImage) return;

        const rect = previewCanvas.getBoundingClientRect();
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;

        isDragging = true;

        // 显示裁剪框
        cropBox.style.left = `${startX}px`;
        cropBox.style.top = `${startY}px`;
        cropBox.style.width = '0px';
        cropBox.style.height = '0px';
        cropBox.classList.remove('hidden');

        // 绘制临时裁剪框
        drawCropPreview(startX, startY, 0, 0);
    }

    // 更新裁剪框
    function updateCrop(e) {
        if (!isDragging || !originalImage) return;

        const rect = previewCanvas.getBoundingClientRect();
        currentX = e.clientX - rect.left;
        currentY = e.clientY - rect.top;

        // 计算裁剪框尺寸
        let width = currentX - startX;
        let height = currentY - startY;

        // 确保宽度和高度为正
        if (width < 0) {
            cropBox.style.left = `${currentX}px`;
            width = -width;
        } else {
            cropBox.style.left = `${startX}px`;
        }

        if (height < 0) {
            cropBox.style.top = `${currentY}px`;
            height = -height;
        } else {
            cropBox.style.top = `${startY}px`;
        }

        cropBox.style.width = `${width}px`;
        cropBox.style.height = `${height}px`;

        // 绘制临时裁剪框
        drawCropPreview(
            Math.min(startX, currentX),
            Math.min(startY, currentY),
            Math.abs(width),
            Math.abs(height)
        );
    }

    // 结束裁剪
    function endCrop() {
        if (!isDragging || !originalImage) return;

        isDragging = false;

        // 获取最终裁剪区域
        const rect = getCropRect();

        // 如果裁剪区域有效，则生成结果
        if (rect.width > 10 && rect.height > 10) {
            generateCropResult(rect);
            downloadBtn.disabled = false;
        }
    }

    // 绘制裁剪预览
    function drawCropPreview(x, y, width, height) {
        const ctx = previewCanvas.getContext('2d');

        // 清除画布并重绘原图
        ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
        ctx.drawImage(originalImage, 0, 0);

        // 绘制半透明遮罩
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';

        // 上
        ctx.fillRect(0, 0, previewCanvas.width, y);
        // 下
        ctx.fillRect(0, y + height, previewCanvas.width, previewCanvas.height - (y + height));
        // 左
        ctx.fillRect(0, y, x, height);
        // 右
        ctx.fillRect(x + width, y, previewCanvas.width - (x + width), height);
    }

    // 获取裁剪区域
    function getCropRect() {
        const left = parseInt(cropBox.style.left);
        const top = parseInt(cropBox.style.top);
        const width = parseInt(cropBox.style.width);
        const height = parseInt(cropBox.style.height);

        return {
            x: left,
            y: top,
            width: width,
            height: height
        };
    }

    // 生成裁剪结果
    function generateCropResult(rect) {
        const ctx = resultCanvas.getContext('2d');

        // 设置结果Canvas尺寸
        resultCanvas.width = rect.width;
        resultCanvas.height = rect.height;

        // 从原图裁剪并绘制到结果Canvas
        ctx.drawImage(
            originalImage,
            rect.x, rect.y, rect.width, rect.height,
            0, 0, rect.width, rect.height
        );

        // 显示结果区域
        resultContainer.classList.remove('hidden');
    }

    // 重置按钮点击事件
    resetBtn.addEventListener('click', function() {
        if (originalImage) {
            initCanvas();
            resultContainer.classList.add('hidden');
            downloadBtn.disabled = true;
        }
    });

    // 下载按钮点击事件
    downloadBtn.addEventListener('click', function() {
        if (resultCanvas.width === 0) return;

        // 创建下载链接
        const link = document.createElement('a');
        link.download = 'cropped-image.png';
        link.href = resultCanvas.toDataURL('image/png');
        link.click();
    });
});


