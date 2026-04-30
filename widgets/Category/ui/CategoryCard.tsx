import Link from "next/link";

interface CategoryCardProp {
    bgImage : string,
    badge : string,
    textColor : string,
    textColorButton : string,
    textH3Part1 : string,
    textH3Part2 : string,
    textP : string,
    image : string,
    textButton : string,
    href : string[]
}

export function CategoryCard({ bgImage, image, badge, textColor, textColorButton, textH3Part1, textH3Part2, textP, textButton , href } : CategoryCardProp) {
    return (
        <article className={`max-w-149 rounded-3xl ${bgImage} min-h-68.5 w-full p-8 flex gap-6 bg-cover `}>
            <div className="w-32 h-44 rounded-2xl my-auto ">
                <img className="w-full h-full object-cover rounded-2xl" src={image} alt={badge} />
            </div>
            <div className="max-w-95 w-full ">
                <div className="flex flex-col gap-2 mb-5">
                    <span className={`uppercase text-[12px] ${textColor}`}>{badge}</span>
                    <h3 className=" text-[30px] text-white font-extrabold leading-[1.2]">{textH3Part1} <br/> {textH3Part2}</h3>
                    <p className={`${textColor} text-sm`}>{textP}</p>
                </div>
                <Link href={`/catalog?brands=${href}`} className={`py-2.5 px-5 bg-white rounded-xl border ${textColorButton} text-sm font-bold hover:-translate-y-1 duration-300 transition-all`}  >{textButton}</Link>

            </div>
        </article>
    )
}