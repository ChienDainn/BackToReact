import { getImageUrl } from "../../utils/image";

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70,
}: {
  imageId: string;
  name: string;
  profession: string;
  awards: string[];
  discovery: string;
  imageSize?: number;
}) {
  const hasNobelPrize = awards.some((award) => award.includes("Nobel"));

  return (
    <section className="profile">
      <h2>
        {name}{" "}
        <span className="badge">
          {hasNobelPrize ? "🏆 Nobel Laureate" : "Distinguished Scientist"}
        </span>
      </h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b>
          {awards.length > 0 ? (
            <> ({awards.join(", ")})</>
          ) : (
            <em> — No awards recorded</em>
          )}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery ? discovery : "Unknown discovery"}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
      />
      <Profile
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </div>
  );
}
