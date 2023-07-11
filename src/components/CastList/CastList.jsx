import {
  CastContainer,
  ActorCard,
  SpanName,
  SpanLabel,
} from './CastList.styled';
import noPhoto from '../../images/No-Image.png';
import PropTypes, { object } from 'prop-types';

export const CastList = ({ cast }) => {
  return (
    <CastContainer>
      {cast.map(({ id, character, name, profile_path }) => {
        const photo = profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : `${noPhoto}`;
        return (
          <ActorCard key={id}>
            <img src={photo} alt="the actor" width="150px" />
            <SpanName>{name}</SpanName>
            <SpanLabel>Character:</SpanLabel>
            <span>{character ? character : 'Unknown'}</span>
          </ActorCard>
        );
      })}
    </CastContainer>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(object),
};
