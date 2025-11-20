// src/data/rooms.ts
import type { RoomItem } from "@/types/room";

export const roomItems: RoomItem[] = [
  {
    id: "vintage-suite",
    name: "ヴィンテージ　Vintage Suite",
    subtitle: "Vintage Suite",
    description:
      "クラシックな家具と落ち着いた色合いでまとめた、SHININGresortを象徴するヴィンテージスイート。窓からの光とアートの色彩をゆっくり味わえる、少し大人のための一室です。",
    thumbnail: "/images/rooms/room-1.webp", // ルーム1
    tag: "VINTAGE",
  },
  {
    id: "japanese-deluxe",
    name: "和　Japanese Deluxe",
    subtitle: "Japanese Deluxe",
    description:
      "和の質感とアートが調和したジャパニーズデラックス。自然素材のソファとやわらかな照明が、北軽井沢の静けさをより深く感じさせてくれます。",
    thumbnail: "/images/rooms/room-2.webp", // ルーム2
    tag: "JAPANESE",
  },
  {
    id: "western-deluxe",
    name: "洋　Western Deluxe",
    subtitle: "Western Deluxe",
    description:
      "明るいトーンのインテリアでまとめた、心地よいウェスタンデラックス。リビングのようにくつろぎながら、ゆったりと滞在を楽しんでいただけるお部屋です。",
    thumbnail: "/images/rooms/room-3.webp", // ルーム3
    tag: "WESTERN",
  },
];
