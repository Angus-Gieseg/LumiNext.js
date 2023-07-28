import FeatureLayout from '@components/FeatureLayout'
import Introduction from '@components/Introduction'
import PartnerShowcase from '@components/PartnersShowcase'
import Form from '@components/Form'
import WebDesignProcess from '@components/WebDesignProcess'

const Home = () => {
  return (
    <>
      <FeatureLayout />
      <Introduction />
      <PartnerShowcase />
      <WebDesignProcess />
      {/* <Form /> */}
    </>
  )
}

export default Home
