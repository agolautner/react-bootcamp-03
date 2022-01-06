class Machine extends React.Component {
    render() {
        //destructuring. very useful, need to practice it.
        const {s1,s2,s3} = this.props;
        //i did the comparison but didn't use parentheses so it didn't work
        const winner = (s1 === s2) && (s2 === s3);

        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{winner ? "CONGRATS" : "oh no, you lose"}</p>
            </div>
        );
    }
}