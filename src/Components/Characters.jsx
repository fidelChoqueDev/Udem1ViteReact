/* eslint-disable react/prop-types */
export default function Characters(props) {
  const { characters, setCharacters } = props;

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home">Volver a la Pagina Principal</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <article>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios:</span>
                <span>{character.episode.length}</span>
              </p>
            </article>
          </div>
        ))}
      </div>
      <span className="back-home">Volver al menu principal</span>
    </div>
  );
}
