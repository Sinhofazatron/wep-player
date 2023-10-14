import { Song } from "@/types";
import React from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadingImage = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return null;
  }

  const { data: imageData } = supabaseClient.storage
    .from("images")
    .getPublicUrl(song.image_path);

  return imageData.publicUrl;
};

export default useLoadingImage;
