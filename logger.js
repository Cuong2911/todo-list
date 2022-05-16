export default function logger(reducer) {
    return (preState, action, args) => {
        // console.group(action);
        // console.group('preState', preState);
        // console.group('Action args', args);
        const nextState = reducer(preState, action, args)
        // console.group('nextState', nextState);

        // console.groupEnd();
        return nextState;
    };
};