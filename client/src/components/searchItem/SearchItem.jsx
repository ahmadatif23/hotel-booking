import { Link } from "react-router-dom"

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem border border-gray-400 p-2.5 rounded-md flex justify-between gap-5 mb-5">
        <img
            src={ item.photos[0] }
            alt=""
            className="siImg w-48 h-48 object-cover"
        />

        <div className="siDesc flex flex-col gap-2.5 flex-[2]">
            <h1 className="siTitle text-xl text-sky-600">{ item.name }</h1>

            <span className="siDistance text-xs">{ item.distance }m from center</span>
            <span className="siTaxiOp text-xs text-white w-max p-1 rounded-md bg-green-600">Free airport taxi</span>

            <span className="siSubtitle text-xs font-bold">
                Studio Apartment with Air conditioning
            </span>

            <span className="siFeatures text-xs">
                { item.description }
            </span>

            <span className="siCancelOp text-xs text-green-600 font-bold">Free cancellation </span>

            <span className="siCancelOpSubtitle text-xs text-green-600">
                You can cancel later, so lock in this great price today!
            </span>
        </div>

        <div className="siDetails flex flex-1 flex-col justify-between">
            {
                item.rating &&
                <div className="siRating flex justify-between">
                    <span className="font-medium">Excellent</span>
                    <button className="bg-[#003580] text-white p-1 font-bold rounded-lg">{ item.rating }</button>
                </div>
            }

            <div className="siDetailTexts text-right flex flex-col gap-1">
                <span className="siPrice text-2xl">${ item.cheapestPrice }</span>
                <span className="siTaxOp text-xs text-gray-500">Includes taxes and fees</span>

                <Link to={ `/hotel/${ item._id }` }>
                    <button className="siCheckButton bg-[#0071c2] text-white font-bold px-2.5 py-1.5 rounded-md">See availability</button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default SearchItem;