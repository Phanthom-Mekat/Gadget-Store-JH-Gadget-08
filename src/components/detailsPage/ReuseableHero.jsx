import Proptypes from "prop-types";
const ReuseableHero = ({header}) => {
    return (
        <div className="hero bg-primary text-white pb-64   py-20 px-5 flex flex-col items-center text-center  rounded-b-xl ">
            <h1 className="text-3xl font-bold mb-4">
               {header}
            </h1>
            <p className="text-sm text-gray-300 mb-6 ">
                Explore the latest gadgets that will take your experiences to the next level. From smart devices to the <br /> coolest accessories, we have it all!
            </p>
        </div>
    );
};

ReuseableHero.propTypes = {
    header: Proptypes.string.isRequired
}

export default ReuseableHero;
