import { useField } from "formik"

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<>
			<div className='py-3'>
				<label className='capitalize font-semibold text-red-700 text-lg' htmlFor={props.id || props.name}>
					{label}
				</label>
				<input className='w-full rounded-full border-2 border-black p-2' {...field} {...props} />
				{meta.touched && meta.error ? (
					<div className='text-xs text-red-600 italic font-sans'>{meta.error}</div>
				) : null}
			</div>
		</>
	)
}

export default TextInput