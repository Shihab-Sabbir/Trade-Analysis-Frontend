import Page from "../../../../components/pageWrapper/Page";
import useAuthcheck from "../../../../hooks/useCheckAuth";

export default function UserProfile() {
  const {authChecked} = useAuthcheck()
  console.log({authChecked})
  console.log('hello')
  return (
    <Page heading="My Profile" content="page header aside">
      <div className="border h-full">MyProfile</div>
    </Page>
  )
}
