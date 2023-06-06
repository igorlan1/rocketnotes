import { Container } from './styles';
/*props means property
we use {} to show to jsx that props.title is a property
*/
export function Button({title, loading = false, ...rest}) {
    return ( 
<Container 
type="button"
disabled={loading}
{...rest}
>
    {loading ? 'carregando...' : title }
</Container>

    )

}