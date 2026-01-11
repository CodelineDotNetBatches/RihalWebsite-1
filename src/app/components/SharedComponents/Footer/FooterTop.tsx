export default function FooterTop() {
    return (
        <div
            className="
        flex
        flex-col
        items-center
        text-center
        gap-6
      "
        >
            {/* ===== Heading Block (617 × 132) ===== */}
            <div
                className="
          w-[617px]
          h-[132px]
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
            >
                {/* Title */}
                <span
                    className="
            text-white
            text-[48px]
            font-semibold
            leading-[48px]
            font-['Inter']
          "
                >
                    AI never slows down.
                </span>

               
                <span className="h-4"></span>

                {/* Subtitle */}
                <span
                    className="
            text-white
            text-[24px]
            font-normal
            leading-8
            font-['Inter']
            opacity-80
          "
                >
                    Stay in the loop with what’s next.
                </span>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col items-center gap-[23px]">
            <form className="flex justify-center">
                <div
                    className="
      relative
      flex items-center
      w-[401px] h-[50px]
      rounded-full
      bg-black/35
      border border-[#00e5c4]/40
      p-[5px]
      focus-within:border-[#00e5c4]
    "
  >
                    {/* Input */}
                   <input
  type="email"
  placeholder="Your email"
  className="
      flex-1
        bg-transparent
        border-none
        outline-none
        focus:outline-none
        focus:ring-0
        px-4
        text-sm
        leading-5
        font-normal
        text-white
        placeholder:text-[#7FF5E8]/50
        pr-[140px]
      "
/>


                    {/* Button */}
                    <button
                        type="submit"
                        className="
        absolute
        right-[5px]
        top-[5px]
        h-[40px]                
        px-[14px]               
        rounded-full
        bg-[#00e5c4]
        text-[#001a18]
        text-sm
        font-medium
        leading-5
        transition
        hover:bg-[#00d1b2]
      "
                    >
                        Join Newsletter
                    </button>
                </div>
            </form>

           <span className="text-[13px] leading-5 text-[#7FF5E8]/40 font-normal">
  Easy to join, easy to leave.
</span>


        </div>
        </div>
    );
}
