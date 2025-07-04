export const Navigation = (props) => {
    return <div className="flex gap-10 bg-[#E5E4E2] fixed left-0 top-0 w-full justify-center">
        <a href="/">Home</a>
        <a href="/pokemon/1">Pokemon 1</a>
        <div>{props.test}</div>
    </div>
}
