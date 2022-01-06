class Hello extends React.Component {
    //declaring a default value for the 'from' prop
    //it only works if the name is exactly 'defaultProps'
    //that's just how it is :)
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    }
    render() {
        let bangs = "!".repeat(this.props.bangs);
        return (
            <div>
                <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
            </div>
        );
    }
}