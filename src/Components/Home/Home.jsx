import Books from "../Books/Books";
import Banner from "./Banner/Banner";

export default function Home() {
  return (
    <div className="container mx-auto">

      <Banner></Banner>

      <Books></Books>
    </div>

  )
}
