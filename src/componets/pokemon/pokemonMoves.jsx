export const Moves = ({ moves, nr }) => {
    const movesArray = moves.slice(0, nr).map(moves => moves.move.name);
    
    return (
        <div className="text-2xl">
            Moves: {movesArray.join(', ')}
            {moves.length - nr > 0 && ` +${moves.length - nr} more`}
        </div>
    );
};
