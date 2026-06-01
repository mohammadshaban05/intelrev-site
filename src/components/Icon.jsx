export default function Icon({ name, className = 'icon' }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`/assets/icons.svg#${name}`} />
    </svg>
  )
}
