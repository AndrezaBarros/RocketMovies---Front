import { Container } from "./style";

import { IoStarOutline, IoStarSharp } from "react-icons/io5";

export function Rating({ rating }) {
  if (rating == 0) {
    return <Container>
      <IoStarOutline size={25} />
      <IoStarOutline size={25} />
      <IoStarOutline size={25} />
      <IoStarOutline size={25} />
      <IoStarOutline size={25} />
    </Container>;
  } else if (rating == 1) {
    return <Container>
      <IoStarSharp size={25} />
      <IoStarOutline size={25} />
      <IoStarOutline size={25} />
      <IoStarOutline size={25} />
      <IoStarOutline size={25} />
    </Container>;
  } else if (rating == 2) {
    return <Container>
      <IoStarSharp size={25} />
      <IoStarSharp size={25} />
      <IoStarOutline size={25} />
      <IoStarOutline size={25} />
      <IoStarOutline size={25} />
    </Container>;
  } else if (rating == 3) {
    return <Container>
      <IoStarSharp size={25} />
      <IoStarSharp size={25} />
      <IoStarSharp size={25} />
      <IoStarOutline size={25} />
      <IoStarOutline size={25} />
    </Container>;
  } else if (rating == 4) {
    return <Container>
      <IoStarSharp size={25} />
      <IoStarSharp size={25} />
      <IoStarSharp size={25} />
      <IoStarSharp size={25} />
      <IoStarOutline size={25} />
    </Container>;
  } else {
    return <Container>
      <IoStarSharp size={25} />
      <IoStarSharp size={25} />
      <IoStarSharp size={25} />
      <IoStarSharp size={25} />
      <IoStarSharp size={25} />
    </Container>;
  }
}
