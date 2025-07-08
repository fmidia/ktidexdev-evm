import { ethers } from 'ethers';

export interface EvmTransaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  status: 'pending' | 'confirmed' | 'failed';
}

export class EthProvider {
  private provider: ethers.JsonRpcProvider;

  constructor(rpcUrl: string) {
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
  }

  async sendTransaction(privateKey: string, to: string, amountEth: number): Promise<EvmTransaction> {
    const wallet = new ethers.Wallet(privateKey, this.provider);

    const tx = await wallet.sendTransaction({
      to,
      value: ethers.parseEther(amountEth.toString())
    });

    console.log('Transação enviada:', tx.hash);
    const receipt = await tx.wait();

    return {
      hash: tx.hash,
      from: wallet.address,
      to,
      value: amountEth.toString(),
      status: receipt?.status === 1 ? 'confirmed' : 'failed'
    };
  }
}
