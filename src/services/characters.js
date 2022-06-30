export const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data;
};

export const postCharacter = async (firstName,lastName,email,age) => {
  const response = await fetch(
    "https://reacttestg18-default-rtdb.firebaseio.com/.json",
    {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        age,
      }),
    }
  );
  const data = await response.json();

  return data;
};



