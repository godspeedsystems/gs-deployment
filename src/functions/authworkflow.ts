import { GSContext, GSStatus } from '@godspeedsystems/core';
import axios from 'axios';

export default async function authWorkFlow(
  ctx: GSContext,
  args: any,
): Promise<any> {
  const logger = ctx.logger;

  try {
    // Request new token from the authentication endpoint
    const response = await axios.post('https:/api.buildpiper.io/auth/token', {
      client_id: '<your_client_id>',
      client_secret: '<your_client_secret>',
      grant_type: 'refresh_token',
      refresh_token: ctx.config.refreshToken, // Store refresh_token in config or elsewhere
    });

    // Update token in config/environment
    const newToken = response.data.access_token;
    ctx.config.token = newToken; // Dynamically update in config
    logger.info('Token refreshed successfully');

    // Return updated headers for future requests
    return {
      Authorization: `Bearer ${newToken}`,
    };
  } catch (error) {
    logger.error('Token refresh failed: %o', error);
    throw new Error('Unable to refresh token');
  }
}
