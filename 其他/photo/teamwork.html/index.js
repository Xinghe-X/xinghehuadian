document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchImages');
    const keywordInput = document.getElementById('keywordInput');
    const imageContainer = document.getElementById('imageContainer');
    
    // 从后端API获取图片数据
    async function fetchFireImages(keyword = '火灾') {
        console.log('开始请求，关键词:', keyword);
        
        try {
            // 使用绝对路径（明确指定后端端口8080）
            const apiUrl = `http://localhost:8080/api/fire-images?keyword=${encodeURIComponent(keyword)}`;
            
            
            imageContainer.innerHTML = '<p class="placeholder">正在加载图片...</p>';
            
            const response = await fetch(apiUrl);
            console.log('请求状态码:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP错误! 状态: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('API返回数据:', result);
            
            if (result.code === 200 && result.data && result.data.length > 0) {
                displayImages(result.data);
            } else {
                imageContainer.innerHTML = '<p class="placeholder">未找到相关图片</p>';
                console.log('API返回错误或无数据:', result);
            }
            
        } catch (error) {
            console.error('获取图片失败:', error);
            imageContainer.innerHTML = '<p class="placeholder">点击上方按钮获取火灾图片</p>';
        }
    }
    
    function displayImages(images) {
  if (!images || images.length === 0) {
    imageContainer.innerHTML = '<p class="placeholder">未找到相关图片</p>';
    return;
  }
  
  imageContainer.innerHTML = '';
  images.forEach(img => { // 重命名参数为img，避免混淆
    console.log('图片URL:', img.url); // 打印实际URL
    const imgElement = document.createElement('img');
    imgElement.src = img.url; // 正确访问对象的url属性
    imgElement.alt = img.title || '火灾图片'; // 使用后端返回的title
    imgElement.title = img.title || '火灾图片';
    imageContainer.appendChild(imgElement);
  });
}
    
    fetchButton.addEventListener('click', () => {
        console.log('按钮被点击');
        const keyword = keywordInput.value.trim() || '火灾';
        fetchFireImages(keyword);
    });
    
    // 初始加载
    fetchFireImages();
});