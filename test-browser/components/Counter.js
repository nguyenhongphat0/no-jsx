export default nojsx(props => {
    const [counter, setCounter] = React.useState(0)
    return button.props({ onClick: () => setCounter(counter + 1) })(counter)
})