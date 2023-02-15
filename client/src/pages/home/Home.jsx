import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div className="mt-12 flex flex-col items-center gap-7">
      <Featured />

      <div className="w-full md:px-0 px-2.5">
        <h1 className="w-full container text-2xl text-slate-700 font-bold mb-3">Browse by property type</h1>
        <PropertyList />
      </div>

      <div className="w-full md:px-0 px-2.5">
        <h1 className="w-full container text-2xl text-slate-700 font-bold mb-3">Home guests love</h1>
        <FeaturedProperties />
      </div>

      <MailList />

      <Footer />
    </div>
  )
}

export default Home