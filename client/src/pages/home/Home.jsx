import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div className="mt-12 flex flex-col items-center gap-7">
      <Featured />

      <h1 className="w-full container text-2xl font-bold mb-3">Browse by property type</h1>
      <PropertyList />

      <h1 className="w-full container text-2xl font-bold mb-3">Home guests love</h1>
      <FeaturedProperties />

      <MailList />

      <Footer />
    </div>
  )
}

export default Home