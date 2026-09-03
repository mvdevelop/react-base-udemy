import styled, { css } from 'styled-components';

export const ProjectsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.size['4xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.size.lg};
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.md};

    h3 {
      font-size: ${({ theme }) => theme.typography.size.lg};
      color: ${({ theme }) => theme.text};
      margin: 0;
    }

    .status {
      font-size: ${({ theme }) => theme.typography.size.xs};
      padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
      border-radius: ${({ theme }) => theme.radius.full};
      font-weight: ${({ theme }) => theme.typography.weight.semibold};
      text-transform: uppercase;

      &.completed {
        background: ${({ theme }) => theme.colors.success};
        color: white;
      }

      &.in-progress {
        background: ${({ theme }) => theme.colors.warning};
        color: white;
      }
    }
  }

  .card-description {
    color: ${({ theme }) => theme.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  .card-tech {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.md};

    .tech-tag {
      font-size: ${({ theme }) => theme.typography.size.xs};
      background: ${({ theme }) => theme.colors.primary[50]};
      color: ${({ theme }) => theme.colors.primary[700]};
      padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
      border-radius: ${({ theme }) => theme.radius.sm};
    }
  }

  .card-actions {
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const MoreProjects = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;