export const ButtonPrimary = ({title, onClick} : {title: String, onClick?: () => void }) => {

  const checkFunction = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className='btn bg-slate-50 text-black hover:bg-slate-200 hover:text-primary-color border-0' onClick={() => checkFunction()}>
      { title }
    </div>
  )
}