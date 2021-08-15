import Home from '../components/home/home';

export default function HomePage() {
  return (
    <Home/>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  }
}
