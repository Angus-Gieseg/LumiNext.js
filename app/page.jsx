import Feed from '@components/Feed'
import FeatureLayout from '@components/FeatureLayout'
import Introduction from '@components/Introduction'
import PartnerShowcase from '@components/PartnersShowcase'
import Form from '@components/Form'

const Home = () => {
  return (
    <>
      <FeatureLayout />
      <Introduction />
      <PartnerShowcase />
      <Form />
    </>
  )
}

export default Home
