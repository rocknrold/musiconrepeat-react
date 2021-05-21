import { Skeleton } from '@material-ui/lab';

const SkeletonContent = () => {
    return (
        <div className="skeleton-content">
            <Skeleton animation="wave" variant="rect" height={300}/>
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
            {/* <Skeleton animation="wave" variant="rect" height={100}/> */}
        </div>
    );
}
 
export default SkeletonContent;