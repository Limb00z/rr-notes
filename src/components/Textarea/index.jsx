import { Container } from "./styles.js";

// eslint-disable-next-line react/prop-types
export function Textarea({ value, ...rest }) {
    return (
        <Container {...rest}>
            {value}
        </Container>
    )
}