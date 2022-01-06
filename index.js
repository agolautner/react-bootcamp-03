class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Hello 
                    to="Ringo"
                    from="Paul"
                    bangs={4}
                    img="https://images.unsplash.com/photo-1641412287600-f99634339cce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                    // boolean={false}
                    // booleanWithNoValueBecomesTrue
                    // data={[1,2,3,4,5]}
                    />
                </div>
                <div>
                    <Hello 
                    to="Britney"
                    from="Adele"
                    bangs={8}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));