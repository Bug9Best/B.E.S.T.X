import { ElementRef, TemplateRef } from "@angular/core";
import { ChatComponent } from "../modules/chat/chat.component";

export const Menu = [
    {
        name_th: "หน้าแรก",
        name_en: "Home",
        component: "home",
    },
    {
        name_th: "โปรไฟล์",
        name_en: "Profile",
        component: "profile",
    },
    {
        name_th: "รายวิชา",
        name_en: "Course",
        component: "course",
    },
    {
        name_th: "ปฏิทิน",
        name_en: "Calendar",
        component: "calendar",
    },
    {
        name_th: "กระทู้",
        name_en: "Forum",
        component: "forum",
    },
    {
        name_th: "สนทนา",
        name_en: "Chat",
        component: "chat",
    },
    // {
    //     name_th: "เพลย์กราวด์",
    //     name_en: "Playground",
    //     component: "playground",
    // },
    // {
    //     name_th: "สตรีมมิ่ง",
    //     name_en: "Streaming",
    //     component: "streaming",
    // },
];
