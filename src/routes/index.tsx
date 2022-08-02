/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default function IndexPage() {
  return (
    <div className={tw`w-screen h-screen bg-gray-900 flex items-center justify-center`}>
      <button className={tw`btn`}>Test</button>
    </div>
  );
}
