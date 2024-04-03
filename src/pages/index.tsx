/* global kakao*/
import Map from "@/components/Map";

declare global {
  interface Window {
    kakao: any;
  }
}
export default function Home() {
  return (
    <Map/>
  );
}
