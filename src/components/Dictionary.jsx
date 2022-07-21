import DictionaryEntries from "./DictionaryEntries";

const Dictionary = (props) => {
  const {dictionary, error} = props;

  if (dictionary.length == 0){
    return <div>No dictionary data found</div>;
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <DictionaryEntries data={dictionary} />
  );
};

export default Dictionary;
