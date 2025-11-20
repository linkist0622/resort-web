// src/types/room.ts
export type RoomTag = "VINTAGE" | "JAPANESE" | "WESTERN";

export interface RoomItem {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  thumbnail: string; // /images/rooms/xxx.webp など
  tag?: RoomTag;
}
