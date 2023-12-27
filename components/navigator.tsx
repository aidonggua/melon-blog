import React from "react";
import Avatar from "@/components/avatar";

const Navigator = () => {
    return <>
        {/*头像*/}
        <div className={"w-full h-16 flex justify-between  bg-white px-20 fixed top-0 z-10 pb-1 border-b border-b-gray-300"}>
            <div className={"flex-1 flex justify-start items-center"}>
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="6304" width="40" height="40">
                    <path
                        d="M201.276101 741.934716a315 315 0 1 0 445.469497-445.485047 315 315 0 1 0-445.469497 445.485047Z"
                        fill="#55B765" p-id="6305"></path>
                    <path
                        d="M243.8 339c-123 123-106.3 339.1-42.5 402.9 57.9 57.9 279.9 80.5 402.9-42.5s108.2-337.2 42.5-402.9C582.9 232.6 366.8 216 243.8 339z"
                        fill="#92DD98" p-id="6306"></path>
                    <path
                        d="M301.5 396.7C174.6 523.6 157.9 712.7 194.2 749c35.9 35.9 225.4 19.6 352.3-107.3s146.1-313.5 107.3-352.3c-40.2-40.2-225.3-19.6-352.3 107.3z"
                        fill="#55B765" p-id="6307"></path>
                    <path
                        d="M377.1 472.2c-123 123-190.6 254.8-175.8 269.7C216.8 757.4 348 689.1 471 566.1s191.3-254.2 175.8-269.7c-15-14.9-146.7 52.8-269.7 175.8z"
                        fill="#92DD98" p-id="6308"></path>
                    <path
                        d="M424 844.2c-86.8 0-168.4-33.8-229.8-95.2C132.8 687.6 99 606 99 519.2s33.8-168.4 95.2-229.8c61.4-61.4 143-95.2 229.8-95.2s168.4 33.8 229.8 95.2c61.4 61.4 95.2 143 95.2 229.8S715.2 687.6 653.8 749c-61.4 61.4-143 95.2-229.8 95.2z m0-630c-81.5 0-158.1 31.7-215.7 89.3-57.6 57.6-89.3 134.2-89.3 215.7s31.7 158.1 89.3 215.7 134.2 89.3 215.7 89.3 158.1-31.7 215.7-89.3c57.6-57.6 89.3-134.2 89.3-215.7s-31.7-158.1-89.3-215.7c-57.6-57.6-134.2-89.3-215.7-89.3z"
                        fill="#543630" p-id="6309"></path>
                    <path
                        d="M632.166768 311.003467a22.2 15.3 44.999 1 0 21.63709-21.637846 22.2 15.3 44.999 1 0-21.63709 21.637846Z"
                        fill="#543630" p-id="6310"></path>
                    <path
                        d="M634.5 308.5c3.9 3.9 10.2 3.9 14.1 0l51.7-51.7-14.1-14.1-51.7 51.7c-3.9 3.8-3.9 10.2 0 14.1zM690.4 230.1h20V157c0-5.5-4.5-10-10-10s-10 4.5-10 10v73.1z"
                        fill="#543630" p-id="6311"></path>
                    <path
                        d="M675.6 217.1c4 0 7.8 1.6 10.6 4.4 2.8 2.8 4.4 6.6 4.4 10.6s-1.6 7.8-4.4 10.6c-2.8 2.8-6.6 4.4-10.6 4.4s-7.8-1.6-10.6-4.4c-2.8-2.8-4.4-6.6-4.4-10.6s1.6-7.8 4.4-10.6c2.8-2.9 6.6-4.4 10.6-4.4m0-20c-9 0-17.9 3.4-24.7 10.3-13.7 13.7-13.7 35.8 0 49.5 6.8 6.8 15.8 10.3 24.7 10.3s17.9-3.4 24.7-10.3c13.7-13.7 13.7-35.8 0-49.5-6.8-6.9-15.8-10.3-24.7-10.3z"
                        fill="#543630" p-id="6312"></path>
                    <path
                        d="M473.7 844.6C284 735.1 264.3 555.2 354.4 399.3l564.6 326c-90 155.9-255.7 228.8-445.3 119.3z"
                        fill="#92DD98" p-id="6313"></path>
                    <path
                        d="M651.6 907c-14 0-28.1-1-42.4-3-46.2-6.5-93.5-23.6-140.5-50.7s-85.5-59.6-114.2-96.4c-27.3-35-45.9-73.8-55.1-115.4-8.8-39.7-9.1-81.5-0.8-124.2 8-41.3 23.9-82.7 47.2-123.1 1.3-2.3 3.5-4 6.1-4.7 2.6-0.7 5.3-0.3 7.6 1l564.6 326c2.3 1.3 4 3.5 4.7 6.1 0.7 2.6 0.3 5.3-1 7.6-23.3 40.3-51.2 74.8-83 102.4-32.8 28.5-69.2 49.2-108 61.4-27.6 8.7-56 13-85.2 13zM358.1 413c-19.5 35.6-32.9 72-39.9 108.1-7.7 40-7.5 79 0.7 116 8.6 38.7 25.9 74.8 51.3 107.4 27.1 34.7 63.6 65.5 108.4 91.3 44.8 25.9 89.7 42.1 133.3 48.2 41 5.8 80.9 2.6 118.7-9.2 36.2-11.4 70.1-30.7 100.9-57.4 27.8-24.2 52.6-54 73.7-88.7L358.1 413z"
                        fill="#543630" p-id="6314"></path>
                    <path
                        d="M698.6 609.6l185.2 171.5-36 37.7-177.5-180.9 78.1 231.2-50.8 25.3-60.9-254.8-56.5 251.6-54.2-19.3 72-242.7-174.1 183.7-43.9-37.3 189.8-174.7-251.2 74.6-4.5-54.8 240.3-49.8L309 507.7l14.6-50 241.2 74.6z"
                        fill="#55B765" p-id="6315"></path>
                    <path
                        d="M511.7 778.8C359.9 691.2 352 555.4 420.2 437.3l433 250C785 805.4 663.4 866.4 511.7 778.8z"
                        fill="#FF5F67" p-id="6316"></path>
                    <path
                        d="M650.3 830.3c-10.6 0-21.4-0.8-32.3-2.3-36.2-5.1-73.6-18.7-111.4-40.5-37.7-21.8-68.3-47.4-90.8-76.2-21.3-27.3-35.5-57.4-42.2-89.7-12.4-59.5 0.7-124.9 37.8-189.2 2.8-4.8 8.9-6.4 13.7-3.7l433 250c4.8 2.8 6.4 8.9 3.7 13.7-37.2 64.3-87.3 108.4-145 127.4-21.3 6.9-43.6 10.5-66.5 10.5zM423.9 451c-30.9 57.2-41.5 114.5-30.7 166.4 6.1 29.3 19 56.7 38.4 81.5 20.9 26.7 49.5 50.7 85 71.2s70.6 33.3 104.2 38c31.2 4.4 61.4 1.9 89.8-7.5 50.4-16.6 94.7-54.5 128.8-109.8L423.9 451z"
                        fill="#543630" p-id="6317"></path>
                    <path
                        d="M651.6 907c-14 0-28.1-1-42.4-3-46.2-6.5-93.5-23.6-140.5-50.7s-85.5-59.6-114.2-96.4c-27.3-35-45.9-73.8-55.1-115.4-8.8-39.7-9.1-81.5-0.8-124.2 8-41.3 23.9-82.7 47.2-123.1 1.3-2.3 3.5-4 6.1-4.7 2.6-0.7 5.3-0.3 7.6 1l564.6 326c2.3 1.3 4 3.5 4.7 6.1 0.7 2.6 0.3 5.3-1 7.6-23.3 40.3-51.2 74.8-83 102.4-32.8 28.5-69.2 49.2-108 61.4-27.6 8.7-56 13-85.2 13zM358.1 413c-19.5 35.6-32.9 72-39.9 108.1-7.7 40-7.5 79 0.7 116 8.6 38.7 25.9 74.8 51.3 107.4 27.1 34.7 63.6 65.5 108.4 91.3 44.8 25.9 89.7 42.1 133.3 48.2 41 5.8 80.9 2.6 118.7-9.2 36.2-11.4 70.1-30.7 100.9-57.4 27.8-24.2 52.6-54 73.7-88.7L358.1 413z"
                        fill="#543630" p-id="6318"></path>
                    <path
                        d="M562.2 648.3c-5.9 10.3-2.4 23.4 7.9 29.4 10.3 5.9 23.4 2.4 29.4-7.9 4.1-7.1 3.6-26.5 2.8-37.9-0.3-4.3-4.8-6.9-8.6-5-10.4 5.1-27.4 14.3-31.5 21.4z"
                        fill="#543630" p-id="6319"></path>
                    <path
                        d="M476.9 576c-5.9 10.3-2.4 23.4 7.9 29.4s23.4 2.4 29.4-7.9c4.1-7.1 3.6-26.5 2.8-37.9-0.3-4.3-4.8-6.9-8.6-5-10.3 5.1-27.4 14.3-31.5 21.4z"
                        fill="#543630" p-id="6320"></path>
                    <path
                        d="M667.5 686c-5.9 10.3-2.4 23.4 7.9 29.4 10.3 5.9 23.4 2.4 29.4-7.9 4.1-7.1 3.6-26.5 2.8-37.9-0.3-4.3-4.8-6.9-8.6-5-10.4 5.1-27.5 14.3-31.5 21.4z"
                        fill="#543630" p-id="6321"></path>
                </svg>
                <h1 className={"font-serif font-bold text-[20px]"}>{'MelonBlog'}</h1>
            </div>
            <div className={"flex justify-center items-center"}>
                <div className="h-full w-40 grid content-center">
                    <div
                        className="h-10 flex justify-between items-center px-8 text-sm font-bold text-gray-600">
                        <a href="/">首页</a>
                        <a href="/">作品集</a>
                    </div>
                </div>
                <Avatar/>
            </div>
        </div>
    </>
}

export default Navigator;
