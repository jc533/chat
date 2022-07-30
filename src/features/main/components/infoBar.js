const InfoBar = () => {
    return (
        <div id="infobar" class="custom-scroll-bar" style={{ "height": "calc(100vh - 62px)" }}>
            <Default/>
        </div>
    );
}
const Default = () => {
    return (
        <div class="absolute w-full">
            <div class="text-center p-3">
                <span class="mdi mdi-account-group-outline text-blue-500 text-5xl"></span>
                <h4 class="text-gray-900 text-xl">群組</h4>
            </div>

            <hr class="border-gray-300" />

            <div class="p-2">
                <button class="list-item" onclick="action='search'">
                    <h4>搜尋對話</h4>
                    <span class="mdi mdi-magnify text-gray-600 text-xl"></span>
                </button>
                <button class="list-item">
                    <div class="text-left">
                        <h4>通知</h4>
                        <p class="text-sm text-gray-600">靜音</p>
                    </div>
                    <span class="mdi mdi-bell-off-outline text-gray-600 text-xl"></span>
                </button>
                <button class="list-item">
                    <div class="text-left">
                        <h4>照片、影片</h4>
                    </div>
                    <span class="mdi mdi-image-multiple text-gray-600 text-xl"></span>
                </button>
                <button class="list-item" onclick="action='leave'">
                    <div class="text-left">
                        <h4>退出群組</h4>
                    </div>
                    <span class="mdi mdi-logout text-red-500 text-xl"></span>
                </button>
            </div>

            <hr class="border-gray-300" />

            <div class="p-2">
                <h4 class="text-gray-600 pl-2 text-sm mb-2">成員</h4>
                <button class="list-item justify-start" onclick="action='addFriend'">
                    <span class="mdi mdi-account-plus text-blue-500 text-xl"></span>
                    <p class="ml-4">新增成員</p>
                </button>
                <div class="list-item justify-start">
                    <span class="mdi mdi-account text-gray-600 text-xl"></span>
                    <p class="ml-4">朋友</p>
                </div>
            </div>
        </div>
    );
}
export default InfoBar;