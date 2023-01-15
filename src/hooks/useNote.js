import { useEffect, useState } from "react";

function useNote(fetchNotesFn, id) {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      fetchNotesFn(id).then(({ data }) => {
        setNotes(data);
        setIsLoading(false);
      });
    }

    fetchData();
  }, []);

  return [notes, isLoading];
}

export default useNote;
