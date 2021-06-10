import cx from 'classnames'
import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  title?: React.ReactNode
  sectionLink?: string
  children?: React.ReactNode
  className?: string
  headerClassName?: string
  subLandingDescription?: string
}
export const LandingSection = ({ title, children, className, headerClassName, sectionLink, subLandingDescription }: Props) => {
  const { t } = useTranslation('product_sublanding')

  return (
    <div className={cx('container-xl px-3 px-md-6', className)} id={sectionLink}>
      {title && (
        <h2 className={cx('font-mktg', headerClassName)}>
          {sectionLink ? <a href={`#${sectionLink}`}>{title}</a> : title}
        </h2>
      )}
      {subLandingDescription && <div
        className="lead-mktg color-text-secondary f4 description-text"
        dangerouslySetInnerHTML={{ __html: t(subLandingDescription) }}
      />}
      {children}
    </div>
  )
}
