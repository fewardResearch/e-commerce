// React
import { FC, ReactElement, memo } from "react";

// Organisms
import FooterMenu from "components/Organisms/FooterMenu";

const Desktop: FC = (): ReactElement => {
    return(
        <footer className="py-10">
            <div className="container mx-auto">
                <FooterMenu />
            </div>
        </footer>
    );
};

export default memo(Desktop);