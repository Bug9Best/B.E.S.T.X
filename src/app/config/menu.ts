import { ElementRef, TemplateRef } from "@angular/core";
import { ChatComponent } from "../modules/chat/chat.component";

export const Menu = [
    {
        label: "หน้าแรก",
        name_en: "Home",
        component: "home",
    },
    {
        label: "โปรไฟล์",
        name_en: "Profile",
        component: "profile",
    },
    {
        label: "รายวิชา",
        name_en: "Course",
        component: "course",
    },
    {
        label: "ปฏิทิน",
        name_en: "Calendar",
        component: "calendar",
    },
    {
        label: "กระทู้",
        name_en: "Forum",
        component: "forum",
    },
    {
        label: "สนทนา",
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
