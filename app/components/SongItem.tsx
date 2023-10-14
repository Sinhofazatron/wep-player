"use client";

import useLoadingImage from "@/hooks/useLoadingImage";
import { Song } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import PlayButton from "./PlayButton";
import LikeButton from "./LikeButton";
import { useUser } from '@/hooks/useUser';
import useAuthModal from '@/hooks/useAuthModal';

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadingImage(data);
  const { user } = useUser();
  const authModal = useAuthModal();

  const onClickItem = () => {
    if (!user) {
      return authModal.onOpen();
    }

    onClick(data.id)
  }

  return (
    <div
      onClick={onClickItem}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
          alt="Image"
          sizes="(max-width: 768px)"
        />
      </div>
      <div className="flex flex-col items-center w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm w-full truncate">
          By {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
      <div className="absolute bottom-5 right-4">
        <LikeButton songId={data.id} onClickFromHome={true}/>
      </div>
    </div>
  );
};

export default SongItem;
