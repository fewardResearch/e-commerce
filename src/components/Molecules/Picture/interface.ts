import IImage from 'components/Atoms/Image/interface'

export default interface IPicture extends IImage {
    desktop?: string;
    mobile?: string;
}