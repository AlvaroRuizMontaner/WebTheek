const withConditionalFeedback =
  ({ loadingFeedback, noDataFeedback, dataEmptyFeedback }) =>
  (Component) =>
  (props) => {
    if (props.isLoading)
      return <div>{loadingFeedback || 'Loading data.'}</div>;

    if (!props.data)
      return <div>{noDataFeedback || 'No data loaded yet.'}</div>;

    if (!props.data.length)
      return <div>{dataEmptyFeedback || 'Data is empty.'}</div>;

    return <Component {...props} />;
  };

  const BaseTodoList = ({ data }) => {
    return (
      <ul>
        {data.map((item) => (
          <li key={item.id} item={item} />
        ))}
      </ul>
    );
  };

const TodoList = withConditionalFeedback({
  loadingFeedback: 'Loading Todos.',
  noDataFeedback: 'No Todos loaded yet.',
  dataEmptyFeedback: 'Todos are empty.',
})(BaseTodoList);


// https://www.robinwieruch.de/react-higher-order-components/