import Button from "@/components/Button";
import starsBg from'@/assets/stars.png';
import { url } from "inspector";

export const Hero = () => {
  return (
  <section className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" style={{backgroundImage: `url(${starsBg.src})`,}}>
  <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
  {/* Planet div start */}
    <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
    {/* Planet div end */}
    {/* Star Ring 1 start */}
    <div className="absolute h-[344px] w-[344px] md:h-[588px] md:w-[588px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute h-2 w-2 top-1/2 left-0 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
        <div className="h-2 w-2 bg-white rounded-full"></div>
      </div>
    </div>
    {/* Star Ring 1 end */}
    {/* Star Ring 2 start */}
    <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>
    {/* Star Ring 2 end */}
    {/* Star Ring 3 start */}
    <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white top-1/2 left-1/2 opacity-20  -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      {/* Star Ring 3 end */}
    <div className="container text-center relative mt-16">
      <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">AI SEO</h1>
      <p className="text-lg md:text-xl text-white/70 mt-5 max-w-xl mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div className="mt-5">
      <Button>Join Now</Button>
      </div>
    </div>
  </section>
  );
};
