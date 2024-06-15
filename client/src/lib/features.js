const fileFormat =(url = "") =>{
    const fileExt = url.split(".").pop();

    if(fileExt ==="mp4" || fileExt ==="webm" || fileExt === "ogg")
      return "viedo";

    if(fileExt ==="mp3" || fileExt ==="wav") return "audio";

    if(fileExt ==="png" || fileExt ==="jpg" || fileExt === "jpeg" || fileExt === "gif") return "image"

    return "file";

}
const transformImage = (url = "", width = 100) => url;
export { fileFormat ,transformImage};